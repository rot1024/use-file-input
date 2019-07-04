# use-file-input

React Hooks for selecting files with hidden `<input type="file" />`

```sh
npm install --save use-file-input
# or
yarn add use-file-input
```

## Usage

```js
const Component = () => {
  const handleFileSelect = useFileInput(
    (files) => {
      // do something with selected files
    },
    { accept: "image/*", multiple: true }
  );

  return (
    <button onClick={handleFileSelect}>
      Select files
    </button>
  );
};
```

## License

MIT License
