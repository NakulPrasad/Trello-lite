Screen shots
![image](https://github.com/NakulPrasad/Trello-lite/assets/96919039/2634d259-273e-45a9-aae4-b460256cf247)
![image](https://github.com/NakulPrasad/Trello-lite/assets/96919039/9e5d00c9-b222-4014-8376-020406cda01d)


## Q. If a user can create and edit stages for a particular board. For example instead of Open > In Progress > Done if they want the stages of their task board to be Read > Working > Reviewing > Completed<br>
A. 
<br>
## Q. If users can comment on tasks
### **Database Changes:**
**Task Comments Table: **Introduce a new table to store comments on tasks. This table should include fields like CommentID, TaskID, UserID, CommentText, Timestamp, etc., to store the comment details.

User Table (if not already present): If you don't already have a table to store user information, create one to associate comments with users.

Task Table Update: Add a field to your existing task table to associate tasks with comments (e.g., CommentIDs as an array or reference to the Task Comments Table).

### **API Changes:**
#### Add Comments to Task Endpoint:
Endpoint: POST /api/tasks/{task_id}/comments
Description: Allows users to add comments to a specific task.
Request Body (JSON):

```json
    {
       "user_id": "user123",
        "comment_text": "This task is progressing well."
    }
```
    
Response (Success - 201 Created):
```json
{
  "message": "Comment added successfully."
}

```
#### Retrieve Comments for Task Endpoint:
Endpoint: GET /api/tasks/{task_id}/comments
Description: Retrieves the comments associated with a specific task.
Response (Success - 200 OK):

```json
{
  "comments": [
    {
      "comment_id": "comment1",
      "user_id": "user123",
      "comment_text": "This task is progressing well.",
      "timestamp": "2023-09-22T10:00:00Z"
    },
    {
      "comment_id": "comment2",
      "user_id": "user456",
      "comment_text": "Agreed!",
      "timestamp": "2023-09-22T10:15:00Z"
    }
  ]
}

```


## Q. How will you do error handling?

1. **Validation:** 
Validate user inputs to ensure they meet the required format and constraints (e.g., valid board names, valid task IDs, non-empty comments).

3. **Try-Catch Blocks for API Requests:**
Wrap API requests in try-catch blocks to catch any network or request-related errors.
Display a user-friendly error message to inform the user if the API request fails. 









