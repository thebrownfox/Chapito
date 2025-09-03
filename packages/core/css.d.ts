declare module "*.module.css" {
	const classes: { readonly [key: string]: string };
	export default classes;
}

// declare module "@chapito/core/chapito.module.css" {
// 	const classes: {
// 		readonly container: string;
// 		readonly item: string;
// 	};
// 	export default classes;
// }
