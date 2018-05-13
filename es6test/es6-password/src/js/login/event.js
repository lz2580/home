import formCheck from '../common/formCheck'
export default () => { 
	const btn = document.getElementById('submit');
	const check = formCheck(document.getElementById('form'));
	btn.onclick = () => {
		check();
		alert("111");
	};
};
