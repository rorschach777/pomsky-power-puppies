import * as dotenv from 'dotenv';


dotenv.config();

import {Config, defineConfig} from 'sanity'

import { schemaTypes } from './src/app/schemas'
import { projectId, dataset } from '@/environment';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

export default defineConfig<Config>({
  basePath: "/studio",
  name: "sanity-nextjs-site",
  title: "Pomsky Power Puppies",
  projectId: projectId,
  dataset: dataset,
  plugins: [deskTool(),visionTool()],
  schema: { types: schemaTypes },
});