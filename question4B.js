purchase();

function purchase(price,taxRate,balance){


			if (balance>= (price + taxRate)){
				alert('Yes');
			}else if (balance< (price + taxRate)){
				alert('No');
			}else{
				alert('Error');
			}
		}