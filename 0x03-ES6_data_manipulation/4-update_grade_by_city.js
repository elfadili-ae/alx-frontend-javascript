export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.filter((element) => element.location === city)
    .map((element) => {
      const student = newGrades.find((g) => g.studentId === element.id);
      const updatedElement = {
        ...element,
        grade: 'N/A',
      };
      if (student) {
        updatedElement.grade = student.grade;
      }
      return updatedElement;
    });
}
