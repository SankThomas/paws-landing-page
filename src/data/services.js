import { v4 as uuidv4 } from "uuid"
import { VscProject } from "react-icons/vsc"
import { IoCalculatorSharp } from "react-icons/io5"
import { GiWireframeGlobe } from "react-icons/gi"

export const services = [
  {
    id: uuidv4(),
    title: "Project Management",
    icon: <VscProject />,
    desc: "Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.",
  },
  {
    id: uuidv4(),
    title: "Accounting",
    icon: <IoCalculatorSharp />,
    desc: "Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.",
  },
  {
    id: uuidv4(),
    title: "Web Services",
    icon: <GiWireframeGlobe />,
    desc: "Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage.",
  },
]
