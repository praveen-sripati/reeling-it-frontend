import { Skeleton } from 'antd';

export const CinemaCardSkeleton = ({ classes }: { classes?: string }) => {
  return (
    <div
      className={`flex flex-col items-center rounded-lg outline h-[290px] min-w-[200px] justify-between p-5 ${classes}`}
    >
      <Skeleton.Image className="mt-4" active={true} />
      <div className="flex flex-col w-full">
        <Skeleton
          className="mb-4"
          active={true}
          round={true}
          title={true}
          paragraph={false}
        />
        <Skeleton active={true} round={true} title={true} paragraph={false} />
      </div>
    </div>
  );
};
