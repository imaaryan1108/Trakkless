module.exports = {
	content: ['./src/**/*.{html,js,jsx}', './public/index.html'],
	theme: {
		extend: {
			keyframes: {
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'fade-out-down': {
					from: {
						opacity: '1',
						transform: 'translateY(0px)',
					},
					to: {
						opacity: '0',
						transform: 'translateY(10px)',
					},
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'fade-out-up': {
					from: {
						opacity: '1',
						transform: 'translateY(0px)',
					},
					to: {
						opacity: '0',
						transform: 'translateY(10px)',
					},
				},
				'fade-in-left': {
					from: {
						opacity: '0',
						transform: 'translateX(-10px)',
					},
					to: {
						opacity: '1',
						transform: 'translateX(0px)',
					},
				},
				'fade-in-right': {
					from: {
						opacity: '0',
						transform: 'translateX(10px)',
					},
					to: {
						opacity: '1',
						transform: 'translateX(0px)',
					},
				},
				wiggle: {
					'0%, 100%': {
						transform: 'rotate(-3deg)',
					},
					'50%': {
						transform: 'rotate(3deg)',
					},
				},

				blink: {
					'0%': {
						color: 'transparent',
					},
					'50%': {
						color: 'var(--ion-color-danger)',
					},
					'100%': {
						color: 'transparent',
					},
				},
				bounceInLeft: {
					'0%': {
						opacity: '0',
						transform: 'translateX(-2000px)',
					},
					'60%': {
						opacity: '1',
						transform: 'translateX(30px)',
					},
					'80%': {
						transform: 'translateX(-10px)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
			},
			animation: {
				'fade-in-down': 'fade-in-down 0.5s ease-out',
				'fade-out-down': 'fade-out-down 0.5s ease-out',
				'fade-in-up': 'fade-in-up 0.5s ease-out',
				'fade-out-up': 'fade-out-up 0.5s ease-out',
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
				wiggle: 'wiggle 1s ease-in-out',
				blink: 'blink 1.5s infinite linear forwards',
				bounceInLeft: 'bounceInLeft 1s',
			},
		},
	},
	plugins: [],
};
