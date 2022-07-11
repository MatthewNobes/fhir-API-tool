library TestArtifact version '1'

using FHIR version '4.0.0'

include "FHIRHelpers" version '4.0.0' called FHIRHelpers

context Patient

define "AgeRange-548":
  AgeInYears() >= 60 and AgeInYears() <= 85