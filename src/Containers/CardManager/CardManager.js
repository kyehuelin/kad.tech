import React, {Component} from 'react'
import {connect} from 'react-redux'

import Card from './Card/Card'
import 'aframe'
import * as actionTypes from '../../store/actions/actions'

class CardManager extends Component {
    componentDidMount () {
        this.intervalAnimation = setInterval(
            () => {
                if (!document.hidden) {
                    this.props.setWaveHeight( Math.floor(Math.random() * 10) )
                    this.props.setWaveSpeed( (Math.floor(Math.random() * 10)  ) +3)
                    this.props.setBounceSpeed( Math.floor(Math.random() * 5 + 1))

                    this.props.startAnimation( {x: Math.floor( Math.random() * this.props.dimensions.x ), z: Math.floor( Math.random() * this.props.dimensions.z )} )
                }
        }
            , 7000)

    }

    render () {

        const xIncrement = 1 / this.props.dimensions.x
        const yIncrement = 1 / this.props.dimensions.z
        const xIncrementHalf = xIncrement / 2
        const yIncrementHalf = yIncrement / 2
        let cardEntityArray = []
        for ( let z = 0; z < this.props.dimensions.z; z++ ) {
            let row = []
            for ( let x = 0; x < this.props.dimensions.x; x++ ) {
                row.push( <Card dimensions={this.props.dimensions} lookup={[xIncrement, yIncrement, xIncrementHalf, yIncrementHalf]} height={this.props.cubeHeight} animCoords={this.props.animCoords} colourInd={this.props.colourIndex} paused={this.props.paused} animInd={this.props.animationIndex} position={`${x} -0 ${-z}`} key={`${x}_${z}`} id={`${x}_${z}`} x={x} z={z} /> )
            }
            cardEntityArray.push( row )
        }
        return (
            <a-entity click={this.cardClickedHandler} position={`-${Math.floor( this.props.dimensions.x / 2 )} 0 ${Math.floor( this.props.dimensions.z / 2 )}`} rotation="0 0 0" >
                {cardEntityArray}
            </a-entity>

        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        enter3D: state.aScene.enter3D,
        animationIndex: state.aScene.animationIndex, // access the aScene reducer slice from global state
        dimensions: state.aScene.dimensions,
        animCoords: state.aScene.animCoords,
        waveType: state.aScene.waveType,
        waveShape: state.aScene.waveShape,
        distanceLookUp: state.aScene.distanceLookUp,
        paused: state.aScene.paused,
        colourIndex: state.aScene.colourIndex,
        cubeHeight: state.aScene.cubeHeight,
        loadedTexture: state.aScene.loadedTexture
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: ( coords ) => dispatch( {type: actionTypes.START_ANIMATION, coords: coords} ),
        setDimensions: ( dimensions ) => dispatch( {type: actionTypes.SET_DIMENSIONS, dimensions: dimensions} ),
        startColourAnim: ( ref ) => dispatch( {type: actionTypes.START_COLOUR_ANIM, ref: ref} ),
        setWaveType: ( waveType ) => dispatch( {type: actionTypes.SET_WAVE_TYPE, waveType: waveType} ),
        setWaveShape: ( waveShape ) => dispatch( {type: actionTypes.SET_WAVE_SHAPE, waveShape: waveShape} ),
        setWaveHeight: ( waveHeight ) => dispatch( {type: actionTypes.SET_WAVE_HEIGHT, waveHeight: waveHeight} ),
        setWaveSpeed: ( waveSpeed ) => dispatch( {type: actionTypes.SET_WAVE_SPEED, waveSpeed: waveSpeed} ),
        setBounceSpeed: ( bounceSpeed ) => dispatch( {type: actionTypes.SET_BOUNCE_SPEED, bounceSpeed: bounceSpeed} )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( CardManager )
