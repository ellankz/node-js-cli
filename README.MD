# Ceasar cipher encode tool

**Ceasar cipher encode tool** is meant to encode and decode the provided text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)

## Install

1. To run the tool you need Node.js version 12+ installed. It is preffered to use [LTS version](https://nodejs.org/en/).

2. Clone the repo:

```bash
$ git clone https://github.com/ellankz/node-js-cli.git
```

3. Navigate to app directory and Install the app:

```bash
$ cd node-js-cli
$ npm install -g .
```

## Usage

# Accepted arguments:

1.  **-s, --shift**: shift encode key
2.  **-i, --input**: input file path (otional)
3.  **-o, --output**: output file path (optional)
4.  **-a, --action**: provide "decode" or "encode"

The tool only converts english alphabet chracters, any other symbols will remain unchanged.
If you want to input the text in terminal, simply do not provide input file.
Same works for output file, if you dont provide it, the result will be printed in console.

## Usage example

1. _-a (--action)_ is **encode**

```bash
$ ceasar_cli -s 29 -i input.txt -o output.txt -a encode
```

```bash
$ ceasar_cli --shift 29 --input input.txt --output output.txt --action encode
```

> input.txt
> `I like to move it, move it!`

> output.txt
> `L olnh wr pryh lw, pryh lw!`

2. _-a (--action)_ is **decode**  
   _Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ ceasar_cli --action decode --shift 29 --input encoded.txt --output plain.txt
```

> encoded.txt
> `L olnh wr pryh lw, pryh lw!`

> plain.txt
> `I like to move it, move it!`

3. _(Optional) Negative shift handling_

```bash
$ ceasar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
```

> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`

## To uninstall the app:

```bash
$ npm uninstall -g node-js-cli
```
