import {Config, defineConfig} from 'sanity'
import { deskTool } from "sanity/desk";
import { schemaTypes } from './src/app/schemas'
import {dataId} from './src/environment';

export default defineConfig<Config>({
  basePath: "/studio",
  name: "sanity-nextjs-site",
  title: "Pomsky Power Puppies",
  projectId: "awsvxwrz",
  dataset: "production",

  plugins: [deskTool()],
  schema: { types: schemaTypes },
});