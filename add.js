const async=require("async");

function add(a,b){

	return new Promise((resolve) => {
		setTimeout(() => {
				resolve(a+b);
		},2000);
	});
}

	async function output(a,b){
		const ans=await
		add(a,b);
	console.log(ans);
	}
output(10,20);