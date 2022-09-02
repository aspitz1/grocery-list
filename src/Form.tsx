import React, { ChangeEvent, Component } from 'react';

interface GroceryState {
    groceryItem: string
}

interface GroceryProps {
    submitGroceryItem: (groceryItem: string) => void
}

class Form extends Component<GroceryProps, GroceryState> {
    constructor(props: GroceryProps) {
        super(props);
        this.state = {
            groceryItem: ''
        }
    }

    updateForm = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ groceryItem: event.target.value });
    }

    handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        this.props.submitGroceryItem(this.state.groceryItem);
        this.setState({ groceryItem: '' })
    }

    render() {
        return (
            <form>
                <input
                    type='text'
                    value={this.state.groceryItem}
                    name='grocery-list'
                    placeholder='grocery item'
                    onChange={(event) => this.updateForm(event)}
                />
                <button
                    name='submit'
                    onClick={(event: React.SyntheticEvent) => this.handleSubmit(event)}
                >
                    SUBMIT
                </button>
            </form>
        )
    }
}

export default Form;