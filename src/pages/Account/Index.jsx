import { Wrapper } from "../../Wrapper"
import { MessageTransition } from "../../components/MessageTransition"
import { useMessageNavigation } from "../../hooks/useMessageNavigation"
import { IndexPage } from "../IndexPage"
import { AccountList } from "./Components/AccountList"

export function Index() {
  const { message, setMessage } = useMessageNavigation()

  return (
    <IndexPage resourceName="account">
      <Wrapper>
        <AccountList setMessage={setMessage} />
        <div className="mt-12">
          <MessageTransition message={message} setMessage={setMessage} />
        </div>
      </Wrapper>
    </IndexPage>
  )
}
