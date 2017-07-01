export class sayHi{
	private static _instance: sayHi = new sayHi();
	constructor(){
		if(sayHi._instance){
			throw new Error('The constructor is private, please use '+Object.getPrototypeOf(this)['constructor']['name']+'.getInstance() method.');
		}
		return sayHi._instance;
	}
	public static getInstance(): sayHi{
		return sayHi._instance;
	}
	sayHi(name:string){
		return 'Hi '+name;
	}
}