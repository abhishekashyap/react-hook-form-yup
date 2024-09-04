const stepStatuses = {
  OPENED: "opened",
  CLOSED: "closed",
};
export type Status = keyof typeof stepStatuses;

// @ts-ignore
// export const getStepStatus = ({ visitedSteps, currValue, stepValue }) => {
//   if (visitedSteps.includes(stepValue))
//     return currValue === stepValue
//       ? stepStatuses.ACTIVE
//       : stepStatuses.COMPLETED;
//   return currValue === stepValue ? stepStatuses.ACTIVE : stepStatuses.PENDING;
// };

export const SectionContainer = ({
  header,
  subheader,
  children,
  status,
}: {
  header: any;
  subheader: any;
  children: any;
  status: Status;
}) => {
  return (
    <div>
      <h3>{header}</h3>
      <h5>{subheader}</h5>
      {stepStatuses[status] === stepStatuses.OPENED && <>{children}</>}
    </div>
  );
};
