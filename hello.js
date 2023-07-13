const async=require("async");

function square(a){

	return new Promise((resolve) => {
		setTimeout(() => {
				resolve(a*a);
		},2000);
	});
}

	async function output(a){
		const ans=await
		square(a);
	console.log(ans);
	}
output(10);