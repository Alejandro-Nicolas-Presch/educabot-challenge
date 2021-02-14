import React from 'react'
import './Card.css'
import Box from '@material-ui/core/Box'
import { Button, Chip, CircularProgress, SvgIcon, Typography, withStyles } from '@material-ui/core'
import { ReactComponent as IconMsg } from '../../Icons/msg.svg'
import { ReactComponent as TagIcon } from '../../Icons/tagPoint.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export function CircularProgressQuery (props) {
  const matches = useMediaQuery('(min-width:975px)')
  if (matches) {
    if (props === 0) {
      return (
        <IsNewCircularProgress thickness={6} size={16} variant='determinate' value={100} className='frontCircularProgress' />
      )
    } else {
      return (
        <>
          <FrontCircularProgress thickness={6} size={16} variant='determinate' value={props} className='frontCircularProgress' />
          <BackgroundCircularProgress thickness={6} size={16} variant='determinate' value={100} className='backgroundCircularProgress' />
        </>
      )
    }
  } else {
    if (props === 0) {
      return (
        <IsNewCircularProgress thickness={10} size={16} variant='determinate' value={100} className='frontCircularProgress' />
      )
    } else {
      return (
        <>
          <FrontCircularProgress thickness={10} size={16} variant='determinate' value={props} className='frontCircularProgress' />
          <BackgroundCircularProgress thickness={10} size={16} variant='determinate' value={100} className='backgroundCircularProgress' />
        </>
      )
    }
  }
}
const IsNewCircularProgress = withStyles({
  root: {
    color: 'rgba(128, 128, 128, 0.3)'
  }
})(CircularProgress)

const BackgroundCircularProgress = withStyles({
  root: {
    color: 'rgba(120, 224, 143,0.5)'
  }
})(CircularProgress)

const FrontCircularProgress = withStyles({
  root: {
    color: '#50D174'
  }
})(CircularProgress)
const Card = (props) => {
  if (props.datos.status === 'new') {
    return (
      <>
        <Box className='borderBox wrapper'>
          <Box className='wrapperBody backgroundIsNew'>
            <Box className='wrapperContent'>
              <Box className='iconWrapper'>
                <SvgIcon component={props.datos.mainIcon} viewBox='0 0 40 40' className='mainIcon' />
              </Box>
              <Box className='wrapperInfo'>
                <Box className='wrapperInfoTitle'>
                  <p className='titleCard font'>{props.datos.title}</p>
                  <p className='subtitleCard font'>{props.datos.subTitle}</p>
                  <Box className='isNew font'>
                    <Typography component='p'>{props.datos.textStatus}</Typography>
                  </Box>
                </Box>
                <Box className='wrapperDate'>
                  <SvgIcon component={props.datos.calendarIcon} className='calendarIcon calendarSpace' />
                  <Box className='wrapperInfoDate'>
                    <Typography component='p' className='titleDate font'>{props.datos.titleDate}</Typography>
                    <Typography component='p' className='date font isNewDate'>{props.datos.date}</Typography>
                  </Box>
                </Box>
                <Box className='wrapperProgress font'>
                  {CircularProgressQuery(props.datos.progressValue)}
                  <Box className='wrapperTextProgress'>
                    <Typography component='p' className='progressInfo'>{props.datos.progressText}</Typography>
                    <Typography component='p' className='boldProgress'>-</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Button className='cardButton'>{props.datos.buttonText}</Button>
          </Box>
          <Box className='bottomBox'>
            <Chip variant='outlined' icon={<TagIcon />} label={props.datos.tagText} className='tag' size='small' />
            <IconMsg className='chatIcon' />
          </Box>
        </Box>
      </>
    )
  } else if (props.datos.status === 'late') {
    return (
      <>
        <Box className='borderBox wrapper'>
          <Box className='wrapperBody'>
            <Box className='wrapperContent'>
              <Box className='iconWrapper'>
                <SvgIcon component={props.datos.mainIcon} viewBox='0 0 40 40' className='mainIcon' />
              </Box>
              <Box className='wrapperInfo'>
                <Box className='wrapperInfoTitle'>
                  <p className='titleCard font'>{props.datos.title}</p>
                  <p className='subtitleCard font'>{props.datos.subTitle}</p>
                  <Box className='isLate font'>
                    <Typography component='p'>{props.datos.textStatus}</Typography>
                  </Box>
                </Box>
                <Box className='wrapperDate'>
                  <SvgIcon component={props.datos.calendarIcon} className='calendarIcon calendarSpace' />
                  <Box className='wrapperInfoDate'>
                    <Typography component='p' className='titleDate font'>{props.datos.titleDate}</Typography>
                    <Typography component='p' className='date font isLateDate'>{props.datos.date}</Typography>
                  </Box>
                </Box>
                <Box className='wrapperProgress font'>
                  {CircularProgressQuery(props.datos.progressValue)}
                  <Box className='wrapperTextProgress'>
                    <Typography component='p' className='progressInfo'>{props.datos.progressText}</Typography>
                    <Typography component='p' className='boldProgress'>{props.datos.progressValue}%</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Button className='cardButton'>{props.datos.buttonText}</Button>
          </Box>
          <Box className='bottomBox'>
            <Chip variant='outlined' icon={<TagIcon />} label={props.datos.tagText} className='tag' size='small' />
            <IconMsg className='chatIcon' />
          </Box>
        </Box>
      </>
    )
  } else if (props.datos.status === 'finished') {
    const textStatus = props.datos.textStatus.split(' ')
    return (
      <>
        <Box className='borderBox wrapper'>
          <Box className='wrapperBody backgroundFinished'>
            <Box className='wrapperContent'>
              <Box className='iconWrapper'>
                <SvgIcon component={props.datos.mainIcon} viewBox='0 0 40 40' className='mainIcon' />
              </Box>
              <Box className='wrapperInfo'>
                <Box className='wrapperInfoTitle'>
                  <p className='titleCard font'>{props.datos.title}</p>
                  <p className='subtitleCard font'>{props.datos.subTitle}</p>
                </Box>
                <Box className='wrapperDate'>
                  <SvgIcon component={props.datos.calendarIcon} className='calendarIcon calendarSpace' />
                  <Box className='wrapperInfoDate'>
                    <Typography component='p' className='titleDate font'>{props.datos.titleDate}</Typography>
                    <Typography component='p' className='date font'>{props.datos.date}</Typography>
                  </Box>
                </Box>
                <Box className='wrapperFinishedMsg'>
                  <SvgIcon component={props.datos.auxIcon} viewBox='0 0 16 16' className='iconDone' />
                  <Box className='wrapperTextMsg'>
                    <Typography component='p' className='msgSpace'>{textStatus[0]}</Typography>
                    <Typography component='p'>{textStatus[1]}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className='emptyBox' />
          </Box>
          <Box className='bottomBox'>
            <Chip variant='outlined' icon={<TagIcon />} label={props.datos.tagText} className='tag' size='small' />
            <IconMsg className='chatIcon chatIconDisabled' />
          </Box>
        </Box>
      </>
    )
  } else if (props.datos.status === 'checking') {
    const textStatus = props.datos.textStatus.split(' ')
    return (
      <>
        <Box className='borderBox wrapper'>
          <Box className='wrapperBody backgroundFinished'>
            <Box className='wrapperContent'>
              <Box className='iconWrapper'>
                <SvgIcon component={props.datos.mainIcon} viewBox='0 0 40 40' className='mainIcon' />
              </Box>
              <Box className='wrapperInfo'>
                <Box className='wrapperInfoTitle'>
                  <p className='titleCard font'>{props.datos.title}</p>
                  <p className='subtitleCard font'>{props.datos.subTitle}</p>
                </Box>
                <Box className='wrapperDate'>
                  <SvgIcon component={props.datos.calendarIcon} className='calendarIcon calendarSpace' />
                  <Box className='wrapperInfoDate'>
                    <Typography component='p' className='titleDate font'>{props.datos.titleDate}</Typography>
                    <Typography component='p' className='date font'>{props.datos.date}</Typography>
                  </Box>
                </Box>
                <Box className='wrapperFinishedMsg'>
                  <SvgIcon component={props.datos.auxIcon} className='iconDone' />
                  <Box className='wrapperTextMsg'>
                    <Typography component='p' className='msgSpace'>{textStatus[0]}</Typography>
                    <Typography component='p'>{textStatus[1]}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className='emptyBox' />
          </Box>
          <Box className='bottomBox'>
            <Chip variant='outlined' icon={<TagIcon />} label={props.datos.tagText} className='tag' size='small' />
            <IconMsg className='chatIcon' />
          </Box>
        </Box>
      </>
    )
  } else {
    return (
      <>
        <Box className='borderBox wrapper'>
          <Box className='wrapperBody'>
            <Box className='wrapperContent'>
              <Box className='iconWrapper'>
                <SvgIcon component={props.datos.mainIcon} viewBox='0 0 40 40' className='mainIcon' />
              </Box>
              <Box className='wrapperInfo'>
                <Box className='wrapperInfoTitle'>
                  <p className='titleCard font'>{props.datos.title}</p>
                  <p className='subtitleCard font'>{props.datos.subTitle}</p>
                </Box>
                <Box className='wrapperDate'>
                  <SvgIcon component={props.datos.calendarIcon} className='calendarIcon calendarSpace' />
                  <Box className='wrapperInfoDate'>
                    <Typography component='p' className='titleDate font'>{props.datos.titleDate}</Typography>
                    <Typography component='p' className='date font'>{props.datos.date}</Typography>
                  </Box>
                </Box>
                <Box className='wrapperProgress font'>
                  {CircularProgressQuery(props.datos.progressValue)}
                  <Box className='wrapperTextProgress'>
                    <Typography component='p' className='progressInfo'>{props.datos.progressText}</Typography>
                    <Typography component='p' className='boldProgress'>{props.datos.progressValue}%</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Button className='cardButton'>{props.datos.buttonText}</Button>
          </Box>
          <Box className='bottomBox'>
            <Chip variant='outlined' icon={<TagIcon />} label={props.datos.tagText} className='tag' size='small' />
            <IconMsg className='chatIcon' />
          </Box>
        </Box>
      </>
    )
  }
}

export default Card
