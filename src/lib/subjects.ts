export const SUBJECTS = [
  "Mathematics",
  "Chemistry", 
  "Physics",
  "Biology",
  "Computer Science",
  "English",
  "General"
] as const;

export type Subject = typeof SUBJECTS[number];

export const isValidSubject = (subject: string): subject is Subject => {
  return SUBJECTS.includes(subject as Subject);
};

export const getSubjectDisplayName = (subject: string): string => {
  return subject;
};

// Helper to get subjects available for a specific teacher
export const getAvailableSubjects = (userSubject?: string | null, userRole?: string): Subject[] => {
  if (userRole === "ADMIN") {
    return [...SUBJECTS];
  }
  
  if (userSubject && isValidSubject(userSubject)) {
    return [userSubject];
  }
  
  // General teachers can choose any subject
  return [...SUBJECTS];
};