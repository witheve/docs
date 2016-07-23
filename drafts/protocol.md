## Eve Protocol

The Eve server supports the following JSON protocol

## Query

```
query:
{
    type: "query"
    id: id
    query: query
}
```

## Close 

```
close
{
    type: "close"
    id: id
}
```

## Result

```
result:
{
    type: "result"
    id: id
    adds: fact[]
    removes: fact[]
}
```

## Error
```
error:
{
    type: "error"
    id: id
    reason: reason
}
```
