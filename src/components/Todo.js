import React from 'react';
import { ListItem, Card ,Typography,CardContent} from '@material-ui/core';


export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem alignItems="flex-start" style={{width: "50%",margin: "auto"}}>
                <Card style={{ minWidth: 275}}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Text:
                         </Typography>
                         <Typography variant="h5" component="h2">
                         {this.props.text}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            Priority:
                         </Typography>
                        <Typography variant="h5" component="h2">
                            {this.props.priority}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            Due Date:
                         </Typography>
                        <Typography variant="body2" gutterBottom>
                            {this.props.dueDate.format('DD-MM-YYYY')}
                        </Typography>
   
                    </CardContent>
                </Card>
            </ListItem>
       
        );
    }

}