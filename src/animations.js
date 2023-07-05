
const getVariants = (element) => {
    switch (element) {
        case 'heroHeading':
            return {
                initial: {
                    opacity: 0,
                    transition: {
                        duration: 0
                    }
                },
                animate: {
                    opacity: 1,
                    transition: {
                        delay: 0.4
                    }
                }
            }
        case 'heroText':
            return {
                initial: {
                    opacity: 0,
                    transition: {
                        duration: 0
                    }
                },
                animate: {
                    opacity: 1,
                    transition: {
                        delay: 0.6
                    }
                }
            }
        case 'heroPhone':
            return {
                initial: {
                    opacity: 0,
                    y: 100,
                    transition: {
                        duration: 0
                    }
                },
                animate: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: .8,
                    }
                }
            }
        case 'heroTryBtn':
            return {
                initial: {
                    scale: 0.5,
                    opacity: 0,
                    transition: {
                        duration: 0
                    }
                },
                animate: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .8
                    }
                }
            }
        case 'heroLearnBtn':
            return {
                initial: {
                    opacity: 0,
                    x: 20,
                    transition: {
                        duration: 0
                    }
                },
                animate: {
                    x: 0,
                    opacity: 1,
                    transition: {
                        delay: 1,
                        duration: 0.2
                    }
                }
            }
        case 'heroRewardLeafL':
            return {
                initial: {
                    opacity: 0,
                    scale: 0.5,
                    rotate: '-30deg',
                    transition: {
                        duration: 0
                    }
                },
                animate: {
                    rotate: '0deg',
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.2,
                        duration: 0.5,
                        type: 'spring',
                    }
                }
            }
        case 'heroRewardLeafR':
            return {
                initial: {
                    opacity: 0,
                    scale: 0.5,
                    rotate: '30deg',
                    transition: {
                        duration: 0
                    }
                },
                animate: {
                    rotate: '0deg',
                    scale: 1,
                    opacity: 1,
                    transition: {
                        type: 'spring',
                        delay: 0.2,
                        duration: 0.5
                    }
                }
            }
        case 'heroRewardText':
            return {
                initial: {
                    opacity: 0,
                    scale: 0,
                    transition: {
                        duration: 0
                    }
                },
                animate: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        type: 'spring',
                        delay: 0.2,
                        duration: 0.5
                    }
                }
            }
    }
}

export default getVariants