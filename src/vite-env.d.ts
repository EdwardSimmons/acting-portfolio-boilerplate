/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USER_NAME: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
