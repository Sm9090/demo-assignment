export const getBadgeColor = (type: string) => {
    switch (type) {
      case "Individual":
        return "bg-[#EFEAFD]";
      case "Couple":
        return "bg-[#E2F3FC]";
      case "Family":
        return "bg-[#FFEAD5]";
      case "Child":
        return "bg-[#D5F6DE]";
      case "Group":
        return "bg-[#FDF4C8] ";
      default:
        return "bg-gray-400";
    }
  };
  
  export const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "2-digit",
      year: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };