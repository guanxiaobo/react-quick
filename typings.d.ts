declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg';
declare module 'crypto-js';
declare module '*.json' {
	const value: any;
	export default value;
}

type CommonObjectType<T = any> = Record<string, T>;
