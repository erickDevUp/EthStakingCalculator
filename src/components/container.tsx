export default function Container({ children }: any) {
  return (
    <div className="flex-col gap-2 bg-white p-5 rounded-2xl ">{children}</div>
  );
}
