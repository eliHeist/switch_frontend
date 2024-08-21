<script lang="ts">
	let show_nav = false;

	function toggleNav() {
		show_nav = !show_nav;
	}
</script>

<div>
	<header class="top-header">
		<div class="left">
			<button class="icon" on:click={toggleNav}><i class="fas fa-bars"></i></button>
			<h1>Switch Consults</h1>
		</div>
		<div class="center">
			<input type="text" placeholder="Search resources, services, and docs (G+/)" />
		</div>
		<div class="right">
			<button class="icon"><i class="far fa-bell"></i></button>
			<button class="icon"><i class="fas fa-cog"></i></button>
			<button class="icon"><i class="far fa-question-circle"></i></button>
			<div class="profile">
				<span>elihest@example.com</span>
				<img src="/images/default-profile-pic.webp" alt="Profile" />
			</div>
		</div>
	</header>

	<nav class="main_navbar" class:expanded={show_nav}>
		<button on:click={toggleNav}>
			<i class="fas fa-bars"></i>
		</button>
		<ul>
			<a href="/" on:click={toggleNav}>
				<div class="icon">
					<i class="fas fa-house"></i>
				</div>
				<span>Home</span>
			</a>
			<a href="/tasks" on:click={toggleNav}>
				<div class="icon">
					<i class="fas fa-list"></i>
				</div>
				<span>Tasks</span>
			</a>
		</ul>
	</nav>
</div>

<style lang="scss">
	.top-header {
		display: flex;
		justify-content: space-between;
		align-content: center;
		background-color: var(--color-primary-main);
		color: var(--color-primary-fg);
		z-index: 100;
		font-size: 0.75rem;

		.left,
		.right {
			display: flex;
			align-items: center;

			h1 {
				font-size: var(--value-5);
				font-weight: 600;
                padding: 0 var(--value-2);
			}

			.icon {
				font-size: var(--value-4);
				padding: var(--value-4);
				// padding-left: var(--value-2);
				cursor: pointer;

				display: grid;
				place-content: center;

				&:hover {
					background-color: var(--color-secondary-main);
				}
			}
		}

		.center {
			flex-grow: 1;
			display: flex;
			justify-content: center;
            padding: var(--value-2);

			input {
				width: 50%;
				padding: var(--value-1) var(--value-2);
				border-radius: var(--value-1);
				background-color: var(--color-primary-fg);
				color: var(--color-black-main);
				border: none;

				&::placeholder {
					color: var(--color-primary-main);
				}

				&:focus-within {
					outline: none;
					background-color: var(--color-white-main);
				}
			}
		}

		.profile {
			display: flex;
			align-items: center;
			gap: var(--value-2);
            padding: var(--value-2);

			img {
				width: var(--value-8);
				height: var(--value-8);
				border-radius: 50%;
			}
		}
	}

	.main_navbar {
		height: 100dvh;
		width: 250px;
		position: fixed;
		top: 0;
		left: 0;
		transform: translateX(-100%);
		z-index: 101;
		display: grid;
		align-content: start;

		background-color: var(--color-white-main);
		box-shadow: 0 0 0 rgba(0, 0, 0, 0);

		transition: all 250ms ease-in-out;

		&.expanded {
			transform: translateX(0);
			box-shadow: 0 var(--value-4) var(--value-8) rgba(0, 0, 0, 0.2);
		}

		button {
			padding: var(--value-3) var(--value-4);
			display: flex;
			justify-content: flex-start;

			&:hover {
				background-color: var(--color-light-main);
			}
		}

		ul {
			a {
				display: grid;
				grid-template-columns: auto 1fr;
				gap: var(--value-4);
				padding: var(--value-2) var(--value-4);

				&:hover {
					background-color: var(--color-secondary-fg);
				}

				.icon {
					width: var(--value-6);
				}
			}
		}
	}
</style>
