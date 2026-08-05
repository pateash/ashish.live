import { cp, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))
const distDirectory = resolve(projectRoot, 'dist')

await mkdir(distDirectory, { recursive: true })

// Vue components retain legacy absolute `/static/...` asset URLs.  Vite only
// bundles imported assets, so copy this public asset tree into Netlify's output.
await cp(resolve(projectRoot, 'static'), resolve(distDirectory, 'static'), {
  recursive: true,
  force: true,
})

// Keep client-side routes such as `/projects/bigquery/architecture` working
// after a direct Netlify navigation or refresh.
await cp(resolve(projectRoot, 'netlify_config/_redirects'), resolve(distDirectory, '_redirects'), {
  force: true,
})
