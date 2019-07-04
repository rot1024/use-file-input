const useFileInput: (callback: (files: FileList) => void, options?: { accept?: string; multiple?: boolean }) => () => void;

export default useFileInput;
