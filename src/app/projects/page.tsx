// import React from 'react';
// import { useRouter } from 'next/router';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { projectData } from '../../data/projectData';
// import DraggableTask from '../../components/DraggableTask';

// const ProjectBoardPage = () => {
//   const router = useRouter();
//   const { projectId } = router.query;

//   const project = projectData.projects.find(p => p.id === projectId);

//   const handleDragEnd = (result) => {
//     // Handle drag and drop logic here
//   };

//   return (
//     <div className="project-board">
//       <h1>{project?.name}</h1>
//       <DragDropContext onDragEnd={handleDragEnd}>
//         {project?.columns.map(column => (
//           <Droppable key={column.id} droppableId={column.id}>
//             {(provided) => (
//               <div ref={provided.innerRef} {...provided.droppableProps}>
//                 <h2>{column.title} ({column.tasks.length})</h2>
//                 {column.tasks.map((task, index) => (
//                 //   <Draggable key={task.id} draggableId={task.id} index={index}>
//                 //     {(provided) => (
//                 //       <DraggableTask task={task} provided={provided} />
//                 //     )}
//                 //   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         ))}
//       </DragDropContext>
//     </div>
//   );
// };

// export default ProjectBoardPage;