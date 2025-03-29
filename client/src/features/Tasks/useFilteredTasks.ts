import { SetStateAction, useState } from "react";
import { FilterType, Task } from "src/api";

type FilterReturnType = {
  filterOption: FilterType;
  setFilterOption: React.Dispatch<SetStateAction<FilterType>>;
  filteredTasks: Task[];
};

const useFilteredTasks = (tasks: Task[]): FilterReturnType => {
  const [filterOption, setFilterOption] = useState<FilterType>("ALL");

  const getFilteredTasks = () => {
    if (filterOption === "ALL") return tasks;
    return tasks.filter(task => (filterOption === "COMPLETED" ? task.completed : !task.completed));
  };

  return { filterOption, setFilterOption, filteredTasks: getFilteredTasks() };
};

export default useFilteredTasks;
