/** Parsed content types and schemas. Runtime FS loading lives in tools/content-compiler (this repo). */

export type {
  Activity,
  ActivityHint,
  ActivityPhase,
  ChoiceOption,
  CourseManifest,
  CourseStatus,
  Insight,
  InterviewPhrasingActivity,
  LessonContent,
  LessonDepth,
  LessonManifest,
  PoolActivity,
  PoolScope,
  PredictOutputActivity,
  SingleChoiceActivity,
  UnitContent,
  UnitManifest,
} from './schemas/index.js';

export {
  ActivityHintSchema,
  ActivityPhaseSchema,
  ActivitySchema,
  CourseManifestSchema,
  CourseStatusSchema,
  InsightFrontmatterSchema,
  LessonDepthSchema,
  LessonManifestSchema,
  PoolScopeSchema,
  UnitManifestSchema,
} from './schemas/index.js';

export { parseInsightMarkdown, splitMarkdownFrontmatter } from './parse-markdown.js';
export { parseOrThrow } from './parse-or-throw.js';
