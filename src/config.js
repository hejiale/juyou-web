export default {
  apiBaseUrl: '/manage-api',
  componentPrefix: 'yc',
  uploadUrl() {
    return this.apiBaseUrl + '/fileUpload/upload'
  }
}