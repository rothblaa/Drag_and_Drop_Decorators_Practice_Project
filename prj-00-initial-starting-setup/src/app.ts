class ProjectInput {
  // Fields
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement; // or just htmlElement
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input",
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedHtmlContent = document.importNode(
      this.templateElement.content,
      true,
    );
    // concrete property that points at node we want to insert
    this.element = importedHtmlContent.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputElement = this.element.querySelector(
      "#title",
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description",
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people",
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private submitHandler(event: Event) {
    // access to inputs
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  // split selection and rendering logic...attach to FE
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const projInput = new ProjectInput();
