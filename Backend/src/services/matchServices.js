export const calculateMatchScore = (user, job) => {
  let score = 0;

  // Skill match
  const matchedSkills = job.skills.filter(skill =>
    user.skills.includes(skill)
  ).length;

  score += (matchedSkills / job.skills.length) * 0.4;

  // Location match
  if (user.location === job.location) {
    score += 0.3;
  }

  // Experience match
  if (user.experience >= job.experience) {
    score += 0.2;
  }

  return score;
};