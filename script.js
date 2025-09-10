//your JS code here. If required.
const inputText = document.getElementById("text");
const delayInput = document.getElementById("delay");
const message = document.getElementById("output");
const btn = document.getElementById("btn");

function wait(ms) {
	return new Promise(resolve => setTimeout(resolve,ms));
	
}

btn.addEventListener("click", async ()=>{
	const text = inputText.value;
	const delay = Number(delayInput.value);
message.textContent = text;
	await wait(delay);
	
});