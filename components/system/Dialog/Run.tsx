import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import StyledButton from "components/system/Dialog/StyledButton";
import StyledRun from "components/system/Dialog/StyledRun";
import { useProcesses } from "contexts/process";

const Run: FC<ComponentProcessProps> = () => {
  const { open } = useProcesses();
  return (
    <StyledRun>
      <figure>
        <img alt="Run" src="/System/Icons/32x32/run.webp" />
        <figcaption>
          Type the name of a program, folder, document, or Internet resource,
          and cuteOS will open it for you.
        </figcaption>
      </figure>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="open">Open:</label>
        <input id="open" type="text" />
      </div>
      <nav>
        <StyledButton
          onClick={() => {
            open(
              (document.querySelector("#open") as HTMLInputElement)?.value ?? ""
            );
            console.info("TODO: OK");
          }}
        >
          OK
        </StyledButton>
        <StyledButton onClick={() => console.info("TODOl Cancel")}>
          Cancel
        </StyledButton>
      </nav>
    </StyledRun>
  );
};

export default Run;
