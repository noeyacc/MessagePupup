## 全域訊息彈跳視窗  

![messagePopup](/assets/messagepopup.PNG)  

### 引入方式:  
Step1: 將component內檔案放入專案內  
Step2: 在main.js引入組件  
```javascript
import registryCustomMessage from "@C/CustomMessage";
Vue.use(registryCustomMessage);
```  

### 使用方式:  
```javascript
this.$customMessage({
    type: "warning"
});
```
### 傳入相關參數
* type: modal類型： warning | error (String)
* title: 訊息標題 (String)
* content: 訊息內容 (String)
* cancelText: 取消按鈕文字 (String),
* confirmText: 確認按鈕文字 (String),
* callback: 確認扭函式 (Function)