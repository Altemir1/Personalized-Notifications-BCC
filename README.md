# Personalized Notifications

The **personalized_notifications** repository is a tool for generating personalized push notifications for banking product customers. The system takes into account client data, their status, age, spending categories, and potential benefits to create messages that sound simple, friendly, and deliver real value.

## 🔍 Work Completed
- 📊 **Client Data Analysis**: name, age, status, balance, top spending categories.  
- 💡 **Personalization**: notifications are built based on client behavior and profile.  
- 🎯 **Benefit Focus**: messages explain how the client can save or earn money (`benefit`).  
- 👥 **Status Awareness**: different communication tone for students, salary clients, standard, and premium clients.  
- ✨ **Formatting**: numbers, currency (₸), text length (180–220 characters), emojis.  

## 📊 Input Data Format
JSON with key parameters:
```json
{
  "client_code": 1024,
  "name": "Aigerim",
  "status": "Premium Client",
  "age": 29,
  "avg_monthly_balance_KZT": 1850000,
  "product": "Credit Card",
  "benefit": 71940.65,
  "top3_categories": ["cafes and restaurants", "online services", "cosmetics"]
}
```

## Structure
- ai – Contains notebooks with data analysis and the message generation pipeline.
- mobile – Code for the mobile platform where you can see a simulation of receiving notifications.
- results – Folder with CSV files of the final results, including notifications and the top 4 products for each user

