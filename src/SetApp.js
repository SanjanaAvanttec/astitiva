






function SetApp () {

    const list = ['Item 1', 'Item 2', 'Item 3']
    return (
      <div
        style={{
          display: 'flex',
          margin: '24px auto',
          maxWidth: '128px',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {list.map((text, index) => (
        <Item key={text} text={text} index={index} />
      ))}
      </div>
    )
  }

  export default SetApp ;