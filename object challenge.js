function shoppingTime (memberId, money){
  if(memberId == null || memberId == ''){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }
  else if ((memberId != null || memberId != '') && money < 50000){
    return 'Mohon maaf, uang tidak cukup';
  }
  else{
    var saleItem = {
      'Sepatu Stacattu': 1500000,
      'Baju Zoro':500000,
      'Baju H&N': 250000,
      'Sweater Uniklooh': 175000,
      'Casing Handphone': 50000
    };

    //mengubah object menjadi array agar bisa disort by value
    var arrSortItem = []
    for (var item in saleItem){
      arrSortItem.push([item, saleItem[item]]);
    }

    //sort array by value(dhi. harga)
    arrSortItem.sort(function(a, b) {
        return a[1] - b[1];
    });
    arrSortItem.reverse();
    

    var listPurchased = [];
    var change = money;
    var i = 0;

    //padahal disini arrSortItem kalau diprint bisa keluar
	//artinya dia memiliki value, tapi kenapa dia dianggap undefined
    console.log(arrSortItem[i][1]);

    //tapi kenapa disini gak bisa dijadikan kondisi while
	//error message: TypeError: arrSortItem[i] is undefined
    while (change >= arrSortItem[i][1]){ //error disini
      listPurchased.push(arrSortItem[i][0]);
      change -= arrSortItem[i][1];
      i++;
    }

    var objReturn = {
      memberId: memberId,
      money: money,
      listPurchased: listPurchased,
      change: change 
    }

    return objReturn;
  }
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());
