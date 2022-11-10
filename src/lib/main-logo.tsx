import { ReactComponent as AgamiLogo } from "../assets/icon/agami-logo.svg"

export const MainLogo = ({hideName}: {hideName?: boolean}) => {
  return (
    <div className="agami-logo">
      <AgamiLogo className="svg-icon" />
      {!hideName && <h1>Or Agami</h1>}
    </div>
  )
}