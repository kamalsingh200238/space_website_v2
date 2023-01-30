interface Props {
  headingNumber: string;
  headingText: string;
}
export default function Heading({ headingNumber, headingText }: Props) {
  return (
    <div className="tracking-widest">
      <h1 className="mb-8 text-center font-barlow-condensed uppercase md:mb-14 md:text-left md:text-xl lg:mb-16 lg:text-3xl">
        <span className="mr-4 text-white/25">{headingNumber}</span>
        {headingText}
      </h1>
    </div>
  );
}
