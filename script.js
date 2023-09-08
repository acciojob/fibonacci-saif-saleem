function fibonacci(num) {
// your code here
	if(num==0)
		return 0;
	if (num==1)
		return 1;
	let s=fibonacci(num-1);
	let p=fibonacci(num-2);
	return p+q;
}

module.exports = fibonacci;
