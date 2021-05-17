function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var names = ['C','C++','Java','Smalltalk', 'Ruby', 
	'Haskell', 'Erlang', 'Elixir', 'Python',
	'Perl', 'PHP', 'Vala', 'Zig', 'Wolfram', 
	'WASM', 'Verilog', 'Tcl', 'TeX', 'TypeScript',
	'Simula', 'Squeak', 'Scala', 'SequenceL',
	'Sed', 'Awk', 'Scheme', 'SQL', 'Squirrel',
	'R', 'Swift', 'Racket', 'REBOL', 'Rust',
	'PureScript', 'Picolisp', 'PHP', 'Pascal',
	'PostScript', 'Processing', 'ParaSail', 'Oberon',
	'Orwell', 'Oz', 'Octave', 'OCaml', 'Caml',
	'Nim', 'Nemerle', 'Modula', 'MATLAB', 'Lua',
	'Lisp', 'Legoscript', 'LiveScript', 'Kotlin',
	'Julia', 'J', 'JavaScript', 'Joy', 'Jython',
	'Idris', 'Gosu', 'Haxe', 'Golang', 'FSharp',
	'CSharp', 'Futhark', 'Malbolge', 'Fortran',
	'Forth', 'FreeBasic', 'Elm', 'Dart', 'Dylan',
	'D', 'COBOL', 'Clojure', 'Crystal', 'CoffeeScript',
	'Boo', 'AppleScript', 'ALGOL', 'Ada', 'Agda',
	'Alice'];

	return names[getRandomInt(0, names.length + 1)];
}

