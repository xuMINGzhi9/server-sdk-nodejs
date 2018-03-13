## 群组禁言服务

### Gag.add(group){#add}

添加群组禁言，禁止群成员在群内发送消息，禁言后只能接收消息

`group` 参数的**属性说明**：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本	|
| :----------|:--------	|:-----	|:------------------------------|:----- |
|	id		 |	string	|	是 	| 群组 Id		|3.0.0|
|	members  |	array	|	是 	| 禁言列表 |3.0.0|
|	minute   |	number	|	是 	| 禁言时长，范围 1 - 1 \* 30 \* 24 \* 60 分钟|3.0.0|


##### 请求成功

```json
{
    "code": 200
}
```

### Gag.remove(group){#remove}

解除禁言

`group` 参数的**属性说明**：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本	|
| :----------|:--------	|:-----	|:------------------------------|:----- |
|	id		 |	string	|	是 	| 群组 Id						|3.0.0|
|	members  |	array	|	是 	| 解除禁言列表 					|3.0.0|

##### 请求成功

```json
{
    "code": 200
}
```

### Gag.getList(group){#getList}

查询禁言成员列表

`group` 参数的**属性说明**：

| 参数   	 |	类型		| 必填	| 说明 							|最低版本	|
| :----------|:--------	|:-----	|:------------------------------|:----- |
|	id		 |	string	|	是 	| 群组 Id		|3.0.0|

##### 请求成功

```json
{
	"code": 200,
	"members":[{
		"time":"2018-03-08 16:12:38",
		"id":"2582"
	}]
}
```
| 参数   	 |	类型		| 说明	
| :----------|:--------	|:-----	
|	time	 |	number	| 解禁时间
|	id		 |	string	| 成员Id