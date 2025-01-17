<script lang='ts'>
    import {
        GraphQLUnionType,
        GraphQLInterfaceType,
        GraphQLObjectType,
        GraphQLEnumType,
        buildClientSchema,
    } from 'graphql';
    import type { IntrospectionQuery } from 'graphql'
    export let typeName: string = undefined;
    export let introspectionQuery: any;
    import TypeLink from './TypeLink.svelte'

    $: schema = buildClientSchema(introspectionQuery as never as IntrospectionQuery)
	$: queryType = schema.getQueryType();
	$: mutationType = schema.getMutationType();
	$: subscriptionType = schema.getSubscriptionType();
    $: pageType = typeName && schema.getType(typeName)
    $: fieldMap = pageType && 'getFields' in pageType && pageType.getFields();
    $: fields = fieldMap && Object.keys(fieldMap).map(k => fieldMap[k])
    $: title = typeof typeName === 'string' ? typeName : 'Root types';

</script>
<svelte:head>
    <title>
        {title}
    </title>
</svelte:head>

{#if typeof typeName !== 'string'}
    <h1>
        Root types
    </h1>
    <p>
        {schema.description ||
            'A GraphQL schema provides a root type for each kind of operation.'}
    </p>

    {#if queryType}
        <h2>
            Query Type
        </h2>

        <TypeLink type={queryType}/>
    {/if}

    {#if mutationType}
        <h2>
            Mutation Type
        </h2>

        <TypeLink type={mutationType}/>
    {/if}

    {#if subscriptionType}
        <h2>
            Subscription Type
        </h2>

        <TypeLink type={subscriptionType}/>
    {/if}
{:else}
    <h1>{typeName}</h1>

    <p>
        {('description' in pageType && pageType.description) || 'No Description'}
    </p>


    {#if pageType instanceof GraphQLUnionType}
        <h2>Possible Types</h2>
        <ul>
            {#each schema.getPossibleTypes(pageType) as possibleType}
                <li><TypeLink type={possibleType}/></li>
            {/each}
        </ul>
    {:else if pageType instanceof GraphQLEnumType}
        <h2>Possible Values</h2>
        <ul>
            {#each pageType.getValues() as enumValue}
                <li>{enumValue.name}</li>
            {/each}
        </ul>
    {:else if pageType instanceof GraphQLInterfaceType}
        <h2>Implementations</h2>
        <ul>
            {#each schema.getPossibleTypes(pageType) as possibleType }
                <li><TypeLink type={possibleType}/></li>
            {/each}
        </ul>
    {:else if pageType instanceof GraphQLObjectType}
        <h2>Implements</h2>
        <ul>
            {#each pageType.getInterfaces() as implementsInterface}
                <li><TypeLink type={implementsInterface}/></li>
            {/each}
        </ul>
    {/if}

    {#if fields && fields.length > 0}
        <h2>Fields</h2>

        {#each fields as field}
            <p>
                {field.name}
                {#if 'args' in field && field.args.length}
                (<br />{#each field.args as arg}
                    &nbsp; &nbsp; &nbsp; &nbsp;<span>{arg.name}: <TypeLink type={arg.type}/></span><br />
                {/each}
                )
                {/if}
                {': '}
                <TypeLink type={field.type}/>
            </p>
        {/each}
    {/if}
{/if}
