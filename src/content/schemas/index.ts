/** Valibot schemas for course → stage → unit → lesson → steps (insights + activities). */

export {
  ActivityHintSchema,
  ActivityPhaseSchema,
  ActivitySchema,
  InterviewPhrasingActivitySchema,
  PoolScopeSchema,
  PredictOutputActivitySchema,
  SingleChoiceActivitySchema,
  type Activity,
  type ActivityHint,
  type ActivityPhase,
  type ChoiceOption,
  type InterviewPhrasingActivity,
  type PoolActivity,
  type PoolScope,
  type PredictOutputActivity,
  type SingleChoiceActivity,
} from './activity.js';

export {
  CourseManifestSchema,
  CourseStatusSchema,
  type CourseManifest,
  type CourseStatus,
} from './course.js';

export { StageManifestSchema, type StageContent, type StageManifest } from './stage.js';

export { InsightFrontmatterSchema, type Insight, type InsightFrontmatter } from './insight.js';

export {
  LessonDepthSchema,
  LessonManifestSchema,
  type LessonContent,
  type LessonDepth,
  type LessonManifest,
} from './lesson.js';

export { UnitManifestSchema, type UnitContent, type UnitManifest } from './unit.js';

export {
  DisciplineManifestSchema,
  DisciplineStackEntrySchema,
  type DisciplineManifest,
  type DisciplineStackEntry,
} from './discipline.js';

export {
  SkeletonManifestSchema,
  SkeletonStageSchema,
  type SkeletonManifest,
  type SkeletonStage,
} from './skeleton.js';

export { StackCourseManifestSchema, type StackCourseManifest } from './stack-course.js';
