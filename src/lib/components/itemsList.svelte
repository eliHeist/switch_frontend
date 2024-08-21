<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    // register srcolltrigger
    gsap.registerPlugin(ScrollTrigger);
    
	let icons: HTMLElement[] = [];

	onMount(() => {
		// Get all .item-icon elements
		const cards = document.querySelectorAll('.point-card') as NodeListOf<HTMLDivElement>;

		// scroll animations
        cards.forEach((card:HTMLDivElement, i:number) => {
            const icon = card.querySelector('.item-icon') as HTMLDivElement;
            const title = card.querySelector('.title') as HTMLDivElement;
            const points = card.querySelector('.points') as HTMLDivElement;

            let is_even = i%2 == 0;

            // icon animation
            gsap.from(icon, {
                scrollTrigger: {
                    trigger: icon,
                    start: 'top 80%',
                    end: 'top center',
                    scrub: 1
                },
                rotate: 180,
                opacity: 0,
                scale: 0.5,
                left: 100,
                duration: 1
            });

            // icon animation
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                    end: 'top 55%',
                    scrub: 1
                },
                stagger: 0.2,
                opacity: 0.2,
                left: 50,
            });

            // icon animation
            gsap.from(points, {
                scrollTrigger: {
                    trigger: points,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 1
                },
                stagger: 0.2,
                opacity: 0.1,
                top: 100,
            });
        })
    });

	function drawLinesBetweenIcons() {
		let linesContainer = document.querySelector('.lines-container') as HTMLDivElement;

		let existing_lines = document.querySelectorAll('.dotted-line');
		existing_lines.forEach((line) => line.remove());

		for (let i = 0; i < icons.length - 1; i++) {
			const icon1 = icons[i];
			const icon2 = icons[i + 1];

			const rect1 = icon1.getBoundingClientRect();
			const rect2 = icon2.getBoundingClientRect();

			const midX1 = rect1.left + rect1.width / 2;
			const midY1 = rect1.top + rect1.height / 2;
			const midX2 = rect2.left + rect2.width / 2;
			const midY2 = rect2.top + rect2.height / 2;

			const length = Math.sqrt((midX2 - midX1) ** 2 + (midY2 - midY1) ** 2);
			const angle = Math.atan2(midY2 - midY1, midX2 - midX1) * (180 / Math.PI);

			const line = document.createElement('div');
			line.className = 'dotted-line';
			line.style.width = `${length}px`;
			line.style.transform = `rotate(${angle}deg)`;
			line.style.left = `${midX1}px`;
			line.style.top = `${midY1}px`;
			line.style.transformOrigin = '0 0';

			console.log(midX1, midY1, midX2, midY2);

			linesContainer.appendChild(line);
			console.log(line);
		}
	}

    interface Item {
        title: string;
        body: string | null;
        points: string[];
        icon: string;
    }

    export let list_items:Item[] = [];
</script>

<section class="py-16">
	<div class="relative grid gap-y-12 sm:gap-x-8 md:gap-x-20 lg:gap-x-48 sm:grid-cols-2">
		{#each list_items as item, index}
			{#if index % 2 != 0}
				<div class="hidden sm:block"></div>
			{/if}
			<div class="point-card grid gap-x-3 md:gap-x-6 lg:gap-x-8 xl:gap-x-12"
				class:reverse={index % 2 == 0}>
				<div class="icon">
					<div class="item-icon relative bg-light p-2 rounded-full aspect-square">
						<div class="w-6 md:w-8">{@html item.icon}</div>
					</div>
				</div>
				<div class="grid text slide-in">
					<h3 class="title font-bold h-10 flex gap-3 items-center mb-4 md:mb-6 xl:mb-8 text-xl md:text-2xl xl:text-3xl">
						<span class="hidden">{index + 1}. </span>{item.title}
					</h3>
                    <div class="points relative">
                        {#if item.body}
                            <p class="body text-gray-600 mb-6">{@html item.body}</p>
                        {/if}
                        <ul class="relative text-gray-600 grid gap-y-2">
                            {#each item.points as point}
                                <li class="flex gap-2 slide-in">
                                    <span>•</span>
                                    <p>{point}</p>
                                </li>
                            {/each}
                        </ul>
                    </div>
				</div>
			</div>
			{#if index % 2 == 0}
				<div class="hidden sm:block"></div>
			{/if}
		{/each}
	</div>
	<div class="lines-container"></div>
</section>


<style lang="scss">
	.point-card {
		grid-template-columns: auto 1fr;

		// &.reverse {
		//     @media (min-width: 640px) {
		//         grid-template-columns: 1fr auto;

		//         .icon{
		//             order: 2;
		//         }

		//         .text{
		//             order: 1;
		//         }
		//     }
		// }

		.item-icon:not(:last-of-type) {
			position: relative;
			&:after {
				content: '';
				position: absolute;
				left: 50%;
				top: 50%;
				width: 100%;
				height: 2px;
				background-color: var(--color-secondary);
				z-index: -1;
				rotate: 90deg;
				transform-origin: 0 0;
			}
		}
	}

	.lines-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: -1; /* Ensure it's behind the icons */
	}

	.dotted-line {
		position: absolute;
		height: 5px;
		background: #cd00ff;
		border-style: dotted;
		border-width: 1px;
	}
</style>

