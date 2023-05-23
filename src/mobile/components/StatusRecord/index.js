import {
  LoadingOutlined,
  CheckCircleOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
export const StatusRecord = {
  pulling: (
    <div>
      Pull down to refresh <ArrowDownOutlined />
    </div>
  ),
  canRelease: (
    <div>
      Release to updated <ArrowUpOutlined />
    </div>
  ),
  refreshing: (
    <div>
      Updating <LoadingOutlined />
    </div>
  ),
  complete: (
    <div>
      Updated <CheckCircleOutlined />
    </div>
  ),
};
